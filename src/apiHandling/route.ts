export function route(endPoint: string, params: Record<string, any> = {}): string {
    const query = new URLSearchParams(params).toString();
    return `${endPoint}?${query}`;
}
