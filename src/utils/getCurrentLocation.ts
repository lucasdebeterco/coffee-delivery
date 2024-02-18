export async function getCurrentLocation() {
    let city = ''
    let state = ''

    await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client')
        .then((res) => res.json())
        .then((data: any) => {
            city = data.locality
            state = data.principalSubdivision
        })

    return { city, state }
}
