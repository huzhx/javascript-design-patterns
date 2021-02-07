let instance = null;
class ConfigureVals{
    constructor(xpoint=0, ypoint=0, shape=null) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.shape = shape;
    }

    static getConfiguration({xpoint, ypoint, shape}) {
        if (!instance) {
            instance = new ConfigureVals(xpoint, ypoint, shape);
        }
        return instance;
    }
}
