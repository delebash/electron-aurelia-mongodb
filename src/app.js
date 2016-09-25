export class App {

    configureRouter(config, router) {
        this.router = router;

        config.map([
            {route: ["", "home"], moduleId:"home/home", title:"Home", name:"home" },
        ]);
    }
}
