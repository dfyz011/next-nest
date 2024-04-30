const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function handleResponse(response: Response) {
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "Failed to fetch data");
	}
	return response.json();
}

export async function get<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${BASE_URL}${endpoint}`);
	return handleResponse(response) as Promise<T>;
}

export async function post<T>(endpoint: string, data: any): Promise<T> {
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return handleResponse(response) as Promise<T>;
}

export async function put<T>(endpoint: string, data: any): Promise<T> {
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return handleResponse(response) as Promise<T>;
}

export async function del<T>(endpoint: string): Promise<T> {
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		method: "DELETE",
	});
	return handleResponse(response) as Promise<T>;
}
