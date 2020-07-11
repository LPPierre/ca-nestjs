# ca-nestjs
A 1-person school project using the [NestJS framework](https://github.com/nestjs/nest).

For instructions, see [millehorde's NestJS course](https://github.com/millehorde/courses/blob/master/courses/nestjs.md#niveau-starter), niveau "Starter".

## Prerequisites
A local PostgreSQL database with the following settings:
- User : `user`
- Password : `password`
- Database : `ca-nestjs`

## Instructions
1. From **back-nestjs** (back-end), run the command `nest run` to serve the API (port 3001).
2. Run the command `npx compodoc -s` to serve the documentation (port 8080). 
3. From **front-react** (front-end), run the command `npm run` (port 3000).

## TODO
- Proper validation with DTOs
- Custom validation: cannot move a creature in a occupied box if its type doesn't match the requirements 
- NestJS testing (unit testing + e2e)
Front-end:
- Component to show the boxes owned by a trainer
- Component to show the content of a box
- Component to remove a creature from a box
- Component to move a creature to one of the boxes owned by the trainer
- Style
- React testing (components)
