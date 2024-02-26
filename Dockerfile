# Node.js 18을 베이스 이미지로 사용
FROM node:20-alpine3.18

# 작업 디렉토리를 /app으로 설정
WORKDIR /app

# package.json 및 yarn.lock 복사하여 패키지 설치
COPY package.json yarn.lock ./

# yarn 설치 및 패키지 설치
RUN npm install -g yarn && yarn install

# 소스 코드를 현재 디렉토리로 복사
COPY . .

# Next.js 애플리케이션의 프로덕션 빌드 실행
RUN yarn build

# 컨테이너가 시작될 때 실행할 명령 설정
CMD ["yarn", "start"]
