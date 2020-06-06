import {
  getModule,
  Module,
  MutationAction,
  VuexModule,
} from "vuex-module-decorators";
import { fetchMessage } from "./api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "message",
  store,
  dynamic: true,
})
class MessageModule extends VuexModule {
  message = "";

  @MutationAction
  async refreshMessage(param?: string) {
    console.log(`refreshMessage(${param})`);
    const message = await fetchMessage(param);
    console.log(`message=${message}`);
    return { message };
  }
}

export default getModule(MessageModule);
