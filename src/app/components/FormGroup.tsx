import React from "react";

export default function FormGroup({ styles, inputCls, label, id, pl, type, value, min, max, required }: { styles: {}, inputCls: any, label: string, id: string, type: string, pl: any, value: any, min: any, max: any, required: boolean }) {
    return <div className={styles.form_group} >
        <label htmlFor="fullname">
            {label}
        </label>
        <input {...required && require} className={inputCls} type={type} id={id} placeholder={pl} name={id} value={value} min={min} max={max} />
    </div>;
}
