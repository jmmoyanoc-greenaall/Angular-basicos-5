import { NgModule } from "@angular/core";
import { ContadorComponet } from "./contador.component";

@NgModule({
    declarations:[
        ContadorComponet
    ],
    exports: [
        ContadorComponet
    ]
})

export class ContadorModule {}