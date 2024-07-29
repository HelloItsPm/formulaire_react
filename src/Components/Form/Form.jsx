// Importation des modules nécessaires de React et react-hook-form, ainsi que des styles.
import React from 'react';
import { useForm } from 'react-hook-form';
import s from './style.module.css';

// Déclaration du composant fonctionnel SignUpForm.
const SignUpForm = () => {
    // Utilisation de useForm pour gérer le formulaire, récupérant les fonctions et objets nécessaires.
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    // Utilisation de la fonction watch pour surveiller la valeur du champ 'password'.
    const password = watch('password', '');

    // Fonction appelée lors de la soumission du formulaire, qui affiche les données du formulaire dans la console.
    const onSubmit = (data) => {
        console.log(data);
    };

    // Retourne le JSX représentant le formulaire d'inscription.
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
            <div className={s.formInputContainer}>
                <label>Nom</label>
                <input
                    // 'type="text"' indique que ce champ accepte des chaînes de caractères.
                    type="text"
                    // {...register('nom', {...})} utilise la fonction register de react-hook-form pour enregistrer ce champ sous le nom "nom" et définir ses règles de validation.
                    {...register('nom', { 
                        // required: 'Ce champ est obligatoire': rend ce champ obligatoire. Si l'utilisateur ne remplit pas ce champ, le message d'erreur "Ce champ est obligatoire" s'affiche.
                        required: 'Ce champ est obligatoire',
                        // minLength: { value: 2, message: 'Le Nom doit faire plus d\'1 charactère' }: impose une longueur minimale de 2 caractères pour ce champ. Si la saisie est trop courte, le message "Le Nom doit faire plus d'1 caractère" s'affiche.
                        minLength: { value: 2, message: 'Le Nom doit faire plus d\'1 charactère' },
                        // maxLength: { value: 50, message: 'Le Nom doit faire moins de 50 charactère' }: impose une longueur maximale de 50 caractères pour ce champ. Si la saisie est trop longue, le message "Le Nom doit faire moins de 50 caractères" s'affiche.
                        maxLength: { value: 50, message: 'Le Nom doit faire moins de 50 charactère' }
                    })}
                />
                {/* {errors.nom && ...} vérifie si une erreur de validation pour le champ "nom" existe. errors est un objet fourni par react-hook-form qui contient les erreurs de validation pour chaque champ. */}
                {/* Si une erreur existe pour le champ "nom", le texte de l'erreur s'affiche à l'intérieur d'un paragraphe <p>. */}
                {errors.nom && <p className={s.error}>{errors.nom.message}</p>}
            </div>
            <div className={s.formInputContainer}>
                <label>Prénom</label>
                <input
                    type="text"
                    {...register('prenom', { 
                        required: 'Ce champ est obligatoire',
                        minLength: { value: 2, message: 'Le Prénom doit faire plus d\'1 charactère' },
                        maxLength: { value: 70, message: 'Le Prénom doit faire moins de 70 charactère' }
                    })}
                />
                {errors.prenom && <p className={s.error}>{errors.prenom.message}</p>}
            </div>
            <div className={s.formInputContainer}>
                <label>Age</label>
                <input
                    // type="number" indique que ce champ accepte des nombres uniquement.
                    type="number"
                    {...register('age', { 
                        required: 'Ce champ est obligatoire',
                        // min: { value: 18, message: 'Vous n\'avez pas l\'âge minimum pour la validation' } : impose une valeur minimale de 18 pour ce champ. Si la valeur saisie est inférieure à 18, le message "Vous n'avez pas l'âge minimum pour la validation" s'affiche.
                        min: { value: 18, message: 'Vous n\'avez pas l\'âge minimum pour la validation' }
                    })}
                />
                {errors.age && <p className={s.error}>{errors.age.message}</p>}
            </div>
            <div className={s.formInputContainer}>
                <label>Adresse mail</label>
                <input
                    // type="email" indique que ce champ accepte des adresses e-mail, ce qui permet au navigateur de valider automatiquement l'entrée comme une adresse e-mail.
                    type="email"
                    {...register('email', { 
                        required: 'Ce champ est obligatoire',
                        // pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Cette adresse mail est invalide' } : impose un format spécifique pour ce champ en utilisant une expression régulière.
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Cette adresse mail est invalide' }
                    })}
                />
                {errors.email && <p className={s.error}>{errors.email.message}</p>}
            </div>
            <div className={s.formInputContainer}>
                <label>Mot de passe</label>
                <input
                    // type="password" indique que ce champ accepte des mots de passe et masque les caractères saisis.
                    type="password"
                    {...register('password', { 
                        required: 'Ce champ est obligatoire',
                        minLength: { value: 8, message: 'Le mot de passe doit faire minimum 8 charactères' },
                        validate: {
                            // hasUpperCase: value => /[A-Z]/.test(value) || 'Le mot de passe doit contenir au moins 1 Majuscule' : vérifie que le mot de passe contient au moins une lettre majuscule. Si ce n'est pas le cas, le message d'erreur "Le mot de passe doit contenir au moins 1 Majuscule" s'affiche.
                            hasUpperCase: value => /[A-Z]/.test(value) || 'Le mot de passe doit contenir au moins 1 Majuscule',
                            // hasLowerCase: value => /[a-z]/.test(value) || 'Le mot de passe doit contenir au moins 1 minuscule' : vérifie que le mot de passe contient au moins une lettre minuscule. Si ce n'est pas le cas, le message d'erreur "Le mot de passe doit contenir au moins 1 minuscule" s'affiche.
                            hasLowerCase: value => /[a-z]/.test(value) || 'Le mot de passe doit contenir au moins 1 minuscule',
                            // hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Le mot de passe doit contenir au moins 1 Charactère spécial' : vérifie que le mot de passe contient au moins un caractère spécial (comme !, @, #, etc.). Si ce n'est pas le cas, le message d'erreur "Le mot de passe doit contenir au moins 1 Caractère spécial" s'affiche.
                            hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Le mot de passe doit contenir au moins 1 Charactère spécial'
                        }
                    })}
                />
                {errors.password && <p className={s.error}>{errors.password.message}</p>}
            </div>
            <div className={s.formInputContainer}>
                <label>Vérification de mot de passe</label>
                <input
                    type="password"
                    {...register('passwordConfirm', { 
                        required: 'Ce champ est obligatoire',
                        // value === password : vérifie si la valeur du champ "passwordConfirm" est égale à la valeur du champ "password" (suivi par watch dans ce code pour obtenir la valeur du mot de passe).
                        validate: value => value === password || 'Les mots de passe ne correspondent pas'
                    })}
                />
                {errors.passwordConfirm && <p className={s.error}>{errors.passwordConfirm.message}</p>}
            </div>
            {/* L'attribut type="submit" définit le type de bouton. Dans un formulaire HTML, un bouton de type submit est utilisé pour envoyer les données du formulaire au serveur ou déclencher une fonction JavaScript pour gérer les données du formulaire. */}
            <button type="submit" className={s.submitButton}>Envoyer</button>
        </form>
    );
};

// Exportation du composant pour qu'il puisse être importé et utilisé dans d'autres parties de l'application.
export default SignUpForm;
