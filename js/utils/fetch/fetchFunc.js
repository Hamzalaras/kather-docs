

export const fetchFunc = async ({ url, signal }) => {

    try {
        const response = await fetch(url, { signal });
    
        if (!response.ok) return null;
    
        let data;
        const contentType = response.headers.get('content-type');
        if (!contentType) return null;
        data = contentType.includes('application/json') ? 
                    await response.json() : 
                    await response.text();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') throw error;
        throw new Error('Api server is unavailable');
    }
};