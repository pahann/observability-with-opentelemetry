## L'observabilité avec OpenTelemetry

### Démarrer l'app de démo en local
##### démarrer Grafana avec le collecteur OpenTelemetry intégré
```
docker run -p 3000:3000 -p 4517:4317 -p 4518:4318 --rm -ti grafana/otel-lgtm
```

##### démarrer le frontend

```
cd give-me-coffee/frontend
npm i
npm run dev
```

##### démarrer les backends
```
cd give-me-coffee/backend
npm i
npm run app-service
npm run user-service
npm run coffee-service
```

##### vous désormais aller
  - sur l'app
  - et sur grafana pour jouer: http://localhost:3000/ > explore > selectionnez Tempo > Query type: search

### Liens vers les slides de la présentation
https://slides.com/pahann/introduction-a-l-observabilite
