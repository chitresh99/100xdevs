const actorName = pm.response.json().data.actorName
pm.collectionVariables.set("favoriteActor", actorName)
