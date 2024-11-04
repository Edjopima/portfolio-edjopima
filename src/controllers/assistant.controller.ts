import axios from "axios";
export default class AssistantController {
  private baseUrl: string = "https://portfolio-agent-api.fly.dev";
  // private baseUrl: string = "http://localhost:4000";

  async createThread() {
    const response = await fetch(`${this.baseUrl}/thread`, {
      method: "GET",
    });
    return response.json();
  }

  async createMessage(threadId: string, content: string) {
    console.log(JSON.stringify({ threadId, content }));
    const response = await axios.post(`${this.baseUrl}/message`, { threadId, content });
    return response.data;
  }

  async getMessages(threadId: string) {
    const response = await fetch(`${this.baseUrl}/messages?threadId=${threadId}`, {
      method: "GET",
    });
    return response.json();
  }
}
