import HtmlWebpackPlugin = require("html-webpack-plugin");
export const entry: string;
export const mode: string;
export namespace output {
    const path: any;
    const filename: string;
    const publicPath: string;
}
export const target: string;
export namespace devServer {
    const historyApiFallback: boolean;
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
