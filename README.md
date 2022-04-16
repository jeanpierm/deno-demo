# deno demo

Simple http server example

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png" height="128" />
</div>

```bash
# bundle app
deno bundle src/index.ts > app.bundle.js

# run server
deno run --allow-net app.bundle.js

# get people
curl http://localhost:8080/people

# get person by id
curl http://localhost:8080/people/{id}
```
