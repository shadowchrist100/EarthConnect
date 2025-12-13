import { Navigate } from "react-router-dom";

const handleSubmit = (e)=>{
    e.preventDefault();
    const formData= new FormData(e.target);
    const name= formData.get('lastname');
    const firstname= formData.get('firstname');
    const pseudo= formData.get('pseudo');
    const mail= formData.get('email');
    const password= formData.get('password');
    const password_confirm= formData.get('password_confirmation');
    
    const nameError= document.getElementById("name_error");
    const firstnameError= document.getElementById("firstname_error");
    const pseudo_error= document.getElementById("pseudo_error");
    const emailError= document.getElementById("email_error");
    const passwordError= document.getElementById("password_error");
    const passwordConfirmError= document.getElementById("password_confirm_error");

    let is_valid= true;

    const nameRegex= /^[\w]{1,30}$/
    if (!nameRegex.test(name)) {
        nameError.textContent="Entrer un nom valide de moins de 30 caractères"
        is_valid= false;
    }

    if (!nameRegex.test(firstname)) {
        firstnameError.textContent= "Entrer un prenom valide";
        is_valid= false;
    }

    const pseudoRegex= /^[\w\d]{1,30}/
    if (!pseudoRegex.test(pseudo)) {
        pseudo_error.textContent= "Entrer un pseudo valide";
        is_valid= false;
    }

    const emailRegex= /^[\d\w.-]+@+[a-zA-Z-.\d]+\.[a-z]{1,3}$/ 
    if (!emailRegex.test(mail)) {
        emailError.textContent= "Entrer un email valide";
        is_valid= false;
    }

    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?:=.*\d)(?=.*[@$!%?&])[a-zA-Z\d@$!%?&]{8,}$/
    if (!passwordRegex.test(password)) {
        passwordError.textContent= "Entrer un mot de passe d'au moins 8 caractères avec au moins une majuscule, une minuscule, un nombre, un caractère spécial"
        is_valid= false;
    }

    if (password != password_confirm) {
        passwordConfirmError.textContent= "Les mots de passe ne correspondent pas"
        is_valid= false;
    }

    if (is_valid) {
        const jsonBody= JSON.stringify(Object.fromEntries(formData.entries()));
        fetch("/api/register", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: jsonBody,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Une erreur est survenue code: ${response.status}`);
            }
            else{
                <Navigate to={'/Profile'}/>
            }
            response.json();
        })
        .then(donnees => {
            console.log(donnees);
        })
        .catch(error => {
            console.error("Une erreur: ", error);
        })
    }

}

const Presentation = () => {
    return (
        <div className='hidden lg:flex flex-col justify-center items-center bg-gradient-subtle p-8'>
            <div className='max-w-md text-center space-y-6'>
                <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow '>
                    <span className='text-primary-foreground font-bold text-xl'>EC</span>
                </div>
                <h1 className='text-4xl font-bold bg-gradient-primary bg-clip-text'>Rejoignez EarthConnect</h1>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                    Créer votre compte et rejoignez une communauté engagée.Partager vos passions et découvrer de nouvelles inspirations
                </p>
                <img className='rounded-2xl shadow-medium w-full max-w-sm mx-auto ' src="image.jpeg" alt="image register" />
            </div>
        </div>
    )

}
const Form = () => {
    return (
        <div className='flex items-center justify-center p-8 bg-background '>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md shadow-medium'>
                <div className='flex flex-col p-6 text-center space-y-2'>
                    <h3>Créer un compte</h3>
                    <p className='text-sm text-muted-foreground '>Rejoinez la communauté EarthConnect</p>
                </div>
                <div className='p-6 pt-0 space-y-6'>
                    <form action="" className='space-y-4' onSubmit= {handleSubmit} >
                        <div className='grid grid-cols-2 gap-3 '>
                            <div className='space-y-2'>
                                <label htmlFor="lastname" className='text-sm font-medium leading-none peer-disabled:opacity-70'>Nom</label>
                                <div className="relative mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-icon lucide-user absolute left-3 transform -translate-y-1/2 w-4 h-4 top-1/2 text-muted-foreground"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    <input maxLength={30} required name="lastname" type="text" id="lastname" className="ring-custom flex h-10 w-full rounded-2xl border border-input bg-background px-3 py-2 text-base file:text-sm file:font-medium file:bg-transparent file:border-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 md:text-sm pl-10 " placeholder="Nom" />
                                </div>
                                <span id="name_error" className="error_message"></span>
                            </div>
                            <div className='space-y2'>
                                <label htmlFor="firstname">Prenom</label>
                                <input maxLength={30} required name="firstname" type="text" id="firstname" className="mt-2 ring-custom flex h-10 w-full rounded-2xl border border-input bg-background px-3 py-2 text-base file:text-sm file:font-medium file:bg-transparent file:border-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 md:text-sm  " placeholder="Prenom" />
                                <span id="firstname_error" className="error_message"></span>
                            </div>
                            <div className='space-y2'>
                                <label htmlFor="pseudo">Pseudo</label>
                                <input maxLength={30} required name="pseudo" type="text" id="pseudo" className="mt-2 ring-custom flex h-10 w-full rounded-2xl border border-input bg-background px-3 py-2 text-base file:text-sm file:font-medium file:bg-transparent file:border-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 md:text-sm  " placeholder="Prenom" />
                                <span id="pseudo_error" className="error_message"></span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " >Email</label>
                            <div className="relative mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground "><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                                <input required name="email" type="email" id="email" placeholder="votre@email.com" className="ring-custom flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base file:text-sm file:font-medium file:bg-transparent file:border-0 file:text-foreground placeholder:text-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2   disabled:opacity-50 md:text-sm pl-10 " />
                            </div>
                            <span id="email_error" className="error_message"></span>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " >Mot de passe</label>
                            <div className="relative mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground "><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                <input required name="password" type="password" id="password" placeholder="......." className="ring-custom flex h-10 w-full rounded-2xl border border-input bg-background px-3 py-2 text-base file:text-sm file:font-medium file:bg-transparent file:border-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 md:text-sm pl-10 pr-10 disabled:cursor-not-allowed" />
                                <button type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 ring-custom focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-xl absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye w-4 h-4 "><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                            <span id="password_error" className="error_message"></span>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Confirmer le mot de passe</label>
                            <div className="relative mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock-icon lucide-lock absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground "><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                <input required name="password_confirmation" type="password" className="ring-custom flex h-10 w-full rounded-2xl border border-input bg-background px-3 py-2 text-base file:text-sm file:font-medium file:bg-transparent file:border-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 md:text-sm pl-10 pr-10 disabled:cursor-not-allowed" />
                                <button type="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 ring-custom focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-xl absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-icon lucide-eye w-4 h-4 "><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                            <span id="password_confirm_error" className="error_message"></span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <button type="button" className="peer h-4 w-4 shrink-0 rounded-2xl border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 ring-custom focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 text-primary-foreground " ></button>
                                <input   role="checkbox" type="checkbox" name="" id="terms" className="absolute transform -translate-x-full m-0 w-4 h-4 opacity-0 data-[state=checked]:bg-primary " />
                                <label htmlFor="terms" className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-muted-foreground">
                                    J'accepte les <a href="" className="text-primary hover:underline">les conditions d'utilisation </a>
                                    et la <a href="" className="text-primary hover:underline">politique de confidentialité</a>
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 ring-custom focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-10 px-4 py-2 w-full">
                            Creer mon compte
                        </button>
                    </form>
                    <div className="relative">
                        <div className="shrink-0 bg-border h-[1px] w-full"></div>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground ">OU</span>
                    </div>
                    <div className="space-y-3">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 ring-custom focus-visible:ring-offset-2 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full">
                            <svg data-lov-id="src/pages/Register.tsx:292:16" data-lov-name="svg" data-component-path="src/pages/Register.tsx" data-component-line="292" data-component-file="Register.tsx" data-component-name="svg" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D" className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path data-lov-id="src/pages/Register.tsx:293:18" data-lov-name="path" data-component-path="src/pages/Register.tsx" data-component-line="293" data-component-file="Register.tsx" data-component-name="path" data-component-content="%7B%7D" fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path data-lov-id="src/pages/Register.tsx:294:18" data-lov-name="path" data-component-path="src/pages/Register.tsx" data-component-line="294" data-component-file="Register.tsx" data-component-name="path" data-component-content="%7B%7D" fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path data-lov-id="src/pages/Register.tsx:295:18" data-lov-name="path" data-component-path="src/pages/Register.tsx" data-component-line="295" data-component-file="Register.tsx" data-component-name="path" data-component-content="%7B%7D" fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path data-lov-id="src/pages/Register.tsx:296:18" data-lov-name="path" data-component-path="src/pages/Register.tsx" data-component-line="296" data-component-file="Register.tsx" data-component-name="path" data-component-content="%7B%7D" fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>
                            S'inscrire avec Google
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 ring-custom focus-visible:ring-offset-2 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full">
                            <svg data-lov-id="src/pages/Register.tsx:302:16" data-lov-name="svg" data-component-path="src/pages/Register.tsx" data-component-line="302" data-component-file="Register.tsx" data-component-name="svg" data-component-content="%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path data-lov-id="src/pages/Register.tsx:303:18" data-lov-name="path" data-component-path="src/pages/Register.tsx" data-component-line="303" data-component-file="Register.tsx" data-component-name="path" data-component-content="%7B%7D" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            S'inscrire avec Facebook
                        </button>
                    </div>
                    <div className="text-center text-sm">
                        <span className="text-muted-foreground">Déja un compte ?</span>
                        <a href="/login" className="text-primary hover:underline font-medium">Se connecter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Register = () => {
    return (
        <section className="min-h-screen grid lg:grid-cols-2">
            <Presentation />
            <Form />
        </section>
    )
}

export default Register;