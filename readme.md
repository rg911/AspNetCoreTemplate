# VisualStudioCode Project scaffolding

## AspnetCore

1. install yo aspnet core generator
    npm install -g yo generator-aspnet bower
2. scaffolding aspnet core use yo
    yo aspnet
    
    (choose WebApplication for EF7)

3. restore aspnet 
    cd "~project folder~"
    dotnet restore

    (for EF7, run dotnet ef database update)

    dotnet build
4. run
    dotnet run

## Angular2 using Yo
1. npm install -g yo generator-angular2
2. yo angular2

## Angular2 Typescript using Yo
1. npm install yo generator-angular2-typescript -g
2. yo angular2-typescript


#Git

1. git remote add origin https://github.com/rg911/AspNetCoreTemplate.git
2. git config user.name rg911
3. git clone https://github.com/rg911/AspNetCoreTemplate.git
4. git push -u origin master
