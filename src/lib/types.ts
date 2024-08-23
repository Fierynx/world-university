export type APIResponse<Data = unknown> = {
  status: string;
  message: string;
  errors: string;
  data: Data;
};