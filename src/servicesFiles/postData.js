const postData = async (URL, body) => {
    const formData = new FormData(body)

    const res = await fetch(URL, {
        method: 'POST',
        body: formData
    })

    if (!res.ok) {
        console.log('Error log: ' + res.status)
    }

    return await res.json()
}

export default postData