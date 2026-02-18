# 1. Use Node
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the code
COPY . .

# 6. Build Vite app
RUN npm run build

# 7. Install serve to run build
RUN npm install -g serve

# 8. Expose port
EXPOSE 5173

# 9. Run app
CMD ["serve", "-s", "dist", "-l", "5173"]
