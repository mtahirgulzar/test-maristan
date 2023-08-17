FROM buildpack-deps:buster

ARG NODE_VERSION
ENV NODE_V $NODE_VERSION
# ARG YARN_VERSION

RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

RUN ARCH= && dpkgArch="$(dpkg --print-architecture)" \
  && case "${dpkgArch##*-}" in \
    amd64) ARCH='x64';; \
    ppc64el) ARCH='ppc64le';; \
    s390x) ARCH='s390x';; \
    arm64) ARCH='arm64';; \
    armhf) ARCH='armv7l';; \
    i386) ARCH='x86';; \
    *) echo "unsupported architecture"; exit 1 ;; \
  esac \
  # gpg keys listed at https://github.com/nodejs/node#release-keys
  && set -ex \
  && for key in \
    4ED778F539E3634C779C87C6D7062848A1AB005C \
    141F07595B7B3FFE74309A937405533BE57C7D57 \
    94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
    74F12602B6F1C4E913FAA37AD3A89613643B6201 \
    71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
    61FC681DFB92A079F1685E77973F295594EC4689 \
    8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 \
    C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
    890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4 \
    C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C \
    DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
    A48C2BEE680E841632CD4E44F07496B3EB3C1762 \
    108F52B48DB57BB0CC439B2997B01419BD92F80A \
    B9E2F5981AA6E0CD28160D9FF13993A75599653C \
  ; do \
      gpg --batch --keyserver hkps://keys.openpgp.org --recv-keys "$key" || \
      gpg --batch --keyserver keyserver.ubuntu.com --recv-keys "$key" ; \
  done \
  && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_V/node-v$NODE_V-linux-$ARCH.tar.xz" \
  && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_V/SHASUMS256.txt.asc" \
  && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
  && grep " node-v$NODE_V-linux-$ARCH.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
  && tar -xJf "node-v$NODE_V-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
  && rm "node-v$NODE_V-linux-$ARCH.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
  # smoke tests
  && node --version \
  && npm --version

# ENV YARN_V $YARN_VERSION

# RUN set -ex \
#   && for key in \
#     6A010C5166006599AA17F08146C2130DFD2497F5 \
#   ; do \
#     gpg --batch --keyserver hkps://keys.openpgp.org --recv-keys "$key" || \
#     gpg --batch --keyserver keyserver.ubuntu.com --recv-keys "$key" ; \
#   done \
#   && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_V/yarn-v$YARN_V.tar.gz" \
#   && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_V/yarn-v$YARN_V.tar.gz.asc" \
#   && gpg --batch --verify yarn-v$YARN_V.tar.gz.asc yarn-v$YARN_V.tar.gz \
#   && mkdir -p /opt \
#   && tar -xzf yarn-v$YARN_V.tar.gz -C /opt/ \
#   && ln -s /opt/yarn-v$YARN_V/bin/yarn /usr/local/bin/yarn \
#   && ln -s /opt/yarn-v$YARN_V/bin/yarnpkg /usr/local/bin/yarnpkg \
#   && rm yarn-v$YARN_V.tar.gz.asc yarn-v$YARN_V.tar.gz \
#   # smoke test
#   && yarn --version

# https://github.com/Azure-App-Service/node/blob/master/10.14/Dockerfile

RUN echo "ipv6" >> /etc/modules

RUN npm install -g pm2 \
  && mkdir -p /home/LogFiles /opt/startup \
  && echo "root:Docker!" | chpasswd \
  && echo "cd /home" >> /etc/bash.bashrc \
  && apt-get update \  
  && apt-get install --yes --no-install-recommends openssh-server vim curl wget tcptraceroute openrc

RUN rm -f /etc/ssh/sshd_config
COPY startup /opt/startup

# configure startup
RUN mkdir -p /tmp
COPY ssh/sshd_config /etc/ssh/

COPY ssh/ssh_setup.sh /tmp/
RUN chmod -R +x /opt/startup \
  && chmod -R +x /tmp/ssh_setup.sh \
  && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null) \
  && rm -rf /tmp/*
  # && cd /opt/startup \
  # && npm install 

ENV PORT 80
ENV SSH_PORT 2222
EXPOSE 80 2222

ENV PM2HOME /pm2home

ENV WEBSITE_ROLE_INSTANCE_ID localRoleInstance
ENV WEBSITE_INSTANCE_ID localInstance
ENV PATH ${PATH}:/home/site/wwwroot

WORKDIR /home/site/wwwroot

COPY . .

ENTRYPOINT ["/opt/startup/init_container.sh"]
