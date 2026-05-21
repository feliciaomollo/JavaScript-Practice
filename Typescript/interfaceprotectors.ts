interface takePhoto{
    cameramode: string,
    filter: string,
    burst: number
}

class Instagram implements takePhoto{
    constructor(
    public cameramode: string,
    public filter: string,
    public burst: number
    ){}
}
class Youtube implements takePhoto{
    constructor(
    public cameramode: string,
    public filter: string,
    public burst: number,
    public shorts: string
    ){}
}