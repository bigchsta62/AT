import bcrypt from 'bcryptjs';


const users = [
    {
        name: 'Admin User',
        email: 'travis@travis.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },

    {
        name: 'Anthony Belcastro',
        email: 'belcastt@live.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },

]

export default users;
