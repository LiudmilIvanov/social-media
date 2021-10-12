const authenticate = async (url, body, onSuccess, onFailure) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .then(data => {
            const authToken = data.idToken
            document.cookie = `x-auth-token=${authToken}`

            if (body.email && data.idToken) {
                onSuccess({
                    email: body.email,
                    id: data.idToken
                })
            }

        }).catch(e => onFailure())
}

export default authenticate