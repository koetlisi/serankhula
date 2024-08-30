export interface InstitutionsResponse {
    code: number; // HTTP status code or a custom response code from the API
    msg: string; // Message from the API, possibly for debugging or user notifications
    data: any; // The data returned by the API, in this case, all users
}