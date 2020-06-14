const userMessages = {
    en: {
        user: {
            title: 'Users management',
            description: 'View, search, create, edit and delete Users',
            createTitle: 'Creating user',
            updateTitle: 'Updating user',
            showTitle: 'User details',
            deleteTitle: 'Deleting user',
            deleteConfirm: 'Are you sure you want to delete this user?',
            validation: {
                required: 'Required field',
                emailVerify: 'Email does not match',
                emailFormat: 'The email has an invalid format',
                passwordVerify: 'Password does not match'
            },
            label: {
                username: 'Username',
                password: 'Password',
                fullname: 'Fullname',
                email: 'Email',
                phone: 'Phone',
                role: 'Role',
                groups: 'Groups',
                active: 'Active',
                actions: 'Actions',
                repeatEmail: 'Confirm email',
                repeatPassword: 'Confirm password',
            },
        },
    },
    es: {
        user: {
            title: 'Administración de Usuarios',
            description: 'Ver, buscar, crear, editar, y borrar usuarios del sistema ',
            adminTitle: 'Administración de Usuarios',
            createTitle: 'Creando usuario',
            updateTitle: 'Actualizando usuario',
            showTitle: 'Detalles de usuario',
            deleteTitle: 'Borrando usuario',
            deleteConfirm: '¿Esta seguro que desea eliminar este usuario?',
            validation: {
                required: 'Campo requerido',
                emailVerify: 'El email no coincide',
                emailFormat: 'El email tiene un formato invalido',
                passwordVerify: 'La contraseña no coincide'
            },
            label: {
                username: 'Usuario',
                password: 'Contraseña',
                fullname: 'Nombre y Apellido',
                email: 'Email',
                phone: 'Telefono',
                role: 'Rol',
                groups: 'Grupos',
                active: 'Activo',
                actions: 'Acciones',
                repeatEmail: 'Confirmar email',
                repeatPassword: 'Confirmar contraseña',
            },
        },

    },
    pt: {
        user: {
            title: 'Administração de Usuários',
            description: 'Ver, buscar, criar, editar e usar empréstimos do sistema',
            createTitle: 'Criando usuário',
            updateTitle: 'Atualizando usuário',
            showTitle: 'Detalhes do usuario',
            deleteTitle: 'Excluindo usuário',
            deleteConfirm: 'Tem certeza de que deseja excluir este usuário?',
            validation: {
                required: 'Campo obrigatório',
                emailVerify: 'O email não corresponde',
                emailFormat: 'O email tem um formato inválido',
                passwordVerify: 'Senha não corresponde'
            },
            label: {
                username: 'Usuário',
                password: 'senha',
                fullname: 'Nome completo',
                email: 'Email',
                phone: 'Telefone',
                role: 'Função',
                groups: 'Grupos',
                active: 'Ativo',
                actions: 'Ações',
                repeatEmail: 'Confirmar o e-mail',
                repeatPassword: 'Confirmar a senha',
            }
        },
    }

}

export default userMessages
