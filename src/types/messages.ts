export interface IMessage {
  id: string | number;
  username: string;
  message: string;
}

export interface IMessageResponse {
  id: string | number;
  attributes: {
    username: string;
    message: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface IMessagesResponse {
  data: Array<IMessageResponse>;
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}
