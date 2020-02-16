import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import { fetchMessage } from "./api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "message",
  store,
  dynamic: true
})
class MessageModule extends VuexModule {
  message = "";

  @Mutation
  updateMessage(message: string) {
    console.log(`updateMessage(${message})`);
    this.message = message;
  }

  @Action({ commit: "updateMessage" })
  async refreshMessage(param?: string) {
    console.log(`refreshMessage(${param})`);
    const message = await fetchMessage(param);
    console.log(`message=${message}`);
    return message;
  }
}

export default getModule(MessageModule);
