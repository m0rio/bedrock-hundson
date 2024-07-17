# 使用する Node.js のバージョン
FROM node:14

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# アプリケーションの依存ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースをコンテナ内にコピー
COPY . .

# ポート3000でアプリケーションを実行することを指定
EXPOSE 3000

# コンテナを起動する際に実行されるコマンド
CMD ["npm", "run", "dev"]
