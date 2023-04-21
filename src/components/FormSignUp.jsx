
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { emailValidations, lastNameValidations, nameValidations } from "../utils/validators";

function FormSignUp() {


    const [promo, setPromo] = useState(false)
    const [news, setNews] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });
    const onSubmit = data => console.log(data);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name", nameValidations)}
        />
        <TextField
            id="lastName"
            label="Apellidos"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register("lastName", lastNameValidations)}
        />
        <TextField
            id="email"
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email", emailValidations)}
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
        />

        <FormGroup>
            <FormControlLabel
                control={<Switch checked={promo} onChange={(e) => { setPromo(e.target.checked) }} />}
                label="Promociones"
            />
            <FormControlLabel
                control={<Switch checked={news} onChange={(e) => { setNews(e.target.checked) }} />}
                label="Novedades"
            />
        </FormGroup>

        <Button type="submit" variant="contained">Registrarse</Button>
    </form>
}

export default FormSignUp
