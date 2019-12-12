'use strict';

function getAdapterForRealm (request, keycloakAdapters) {
  return request.session.realmInfo && request.session.realmInfo.name ?
    keycloakAdapters[request.session.realmInfo.name] :
    keycloakAdapters['Default-Realm'];
}

module.exports.getAdapterForRealm = getAdapterForRealm;
