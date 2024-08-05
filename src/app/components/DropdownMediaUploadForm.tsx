import React from "react";
import { FileTextIcon, X } from "lucide-react";
import upload_icon from "/src/app/folder.svg"
import Image from "next/image";

export default function DropdownMediaUploadForm({ styles, title, desc, inputMediaFormUniqueIdSelector }: { styles: object, title: string, desc: string, inputMediaFormUniqueIdSelector: string }) {
    return <div className={styles.dropdown_media_form_group} >
        <input className={`${styles.dropdown_form_checkbox} hidden`} type="checkbox" id={inputMediaFormUniqueIdSelector} />
        <label htmlFor={inputMediaFormUniqueIdSelector} className={styles.dropdown_media_form_group_top} >
            <div className={styles.media_form_left_wrapper}>
                <FileTextIcon />
            </div>
            <div className={styles.media_form_mid_wrapper}>
                <div className={styles.media_form_title}>
                    {title}
                </div>
                <div className={styles.media_form_desc}>
                    {desc}
                </div>
            </div>
            <div className={styles.media_form_right_wrapper}>
            </div>
        </label>
        <div className={styles.dropdown_media_form_group_bottom} >
            <div className={styles.media_upload_form_modal}>
                <div className={styles.media_upload_form_modal_header}>
                    <div className={styles.media_upload_form_modal_header_left}>
                        <div className={styles.media_upload_form_modal_title}>
                            Media Upload
                        </div>
                        <div className={styles.media_upload_form_modal_desc}>
                            Add your documents here, you can upload up to 5 files max.
                        </div>
                    </div>
                    <div className={styles.media_upload_form_modal_header_right}>
                        <X />
                    </div>
                </div>
                <div className={styles.media_upload_form_modal_body}>
                    <div className={styles.media_upload_form}>
                        <div className={styles.media_upload_icon}>
                            <Image alt="upload_icon" className={styles.media_upload_icon_img} src={upload_icon} width={20} height={20} />
                        </div>
                        <div className={styles.media_upload_form_desc}>
                            Drag your file(s) to start uploading
                            <input type="file" className="hidden" name="upload_contract_doc" id="upload_contract_doc" />
                            <span className={`${styles.media_upload_form_desc_or}`}>
                                <hr /> or <hr />
                            </span>
                            <label htmlFor="upload_contract_doc" className={styles.media_upload_button}>
                                Brower files
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.media_upload_form_modal_footer}>
                    <div className={styles.media_upload_form_modal_footer_top}>
                        <div className={styles.media_upload_form_modal_footer_top_info}>
                            Only support pdf, png, jpg, and zip files
                        </div>
                    </div>
                    <div className={styles.media_upload_form_modal_footer_bottom}>
                        <div className={styles.media_upload_form_modal_footer_bottom_buttons}>
                            Cancel
                        </div>
                        <div className={styles.media_upload_form_modal_footer_bottom_buttons}>
                            Next
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
