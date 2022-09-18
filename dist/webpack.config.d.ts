import HtmlWebpackPlugin = require("html-webpack-plugin");
export const entry: string;
export const mode: string;
export namespace output {
    const path: any;
    const filename: string;
}
export const target: string;
export namespace devServer {
    export const port: string;
    export namespace _static {
        const directory: any;
    }
    export { _static as static };
    export const open: boolean;
    export const hot: boolean;
    export const liveReload: boolean;
}
export namespace resolve {
    const extensions: string[];
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
        };
        enforce?: undefined;
        loader?: undefined;
    } | {
        enforce: string;
        test: RegExp;
        loader: string;
        exclude?: undefined;
        use?: undefined;
    } | {
        test: RegExp;
        use: string[];
        exclude?: undefined;
        enforce?: undefined;
        loader?: undefined;
    })[];
}
export const plugins: HtmlWebpackPlugin[];
