export class HttpError {
    public message: string | undefined; 
    public status: number | undefined;
    public url: string | undefined;
    public payload: any | undefined;

    fromFetchResponse(response: Response) {
        this.message = response.statusText;
        this.status = response.status;
        return this;
    }

    fromGenericError(error: Error) {
        this.message = error.message;
        return this;
    }

    toString() {
        return `${this.status} - ${this.message}`;
    }

}