import { Compiler, Configuration, CopyRspackPlugin } from "@rspack/core"
import { execFileSync } from "child_process"
import path from "path"

const config: Configuration = {
    mode: "development",
    devtool: "source-map",
    entry: {
        content: "./src/content.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist/common"),
        filename: "[name].js",
        clean: true,
    },
    experiments: {
        css: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.module\.css$/,
                type: "css/module",
                parser: { namedExports: false },
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "builtin:swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "typescript",
                                tsx: true,
                            },
                            transform: {
                                react: { runtime: "automatic" },
                            },
                        },
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyRspackPlugin({
            patterns: [
            ],
        }),
        {
            apply(compiler: Compiler) {
                compiler.hooks.afterEmit.tap("PostBuild", () => {
                    execFileSync("bash", ["scripts/postbuild.sh"], {
                        stdio: "inherit",
                    })
                })
            },
        },
    ],
}

export default config
