import Badge from "@components/atoms/badge";
import { SubTitle } from "@components/atoms/text";
import { faLinkedinIn, faGithub, faDiscord, faSlack, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
    return (



                <section className="flex knowledge-section items-center">

                    <div >
                        <SubTitle
                            title="Links"
                            classNameExtra="font-bold text-primary py-5"
                        />
                        <Badge
                            icon={faLinkedinIn}
                            link = 'https://www.linkedin.com/in/luis-felipe-cadavid-chica-168617b6/'
                            sizeSVG={45}
                            classExtra="self-center"
                        />
                        <Badge
                            icon={faGithub}
                            link = 'https://github.com/efsiul'
                            sizeSVG={45}
                            classExtra="self-center"

                        />

                        <Badge
                            icon={faSlack}
                            link='https://app.slack.com/client/T01ATQK62F8/C01BQC114P2'
                            sizeSVG={45}
                            classExtra="self-center"
                        />
                        <Badge
                            icon={faDiscord}
                            description = 'efsiul84'
                            sizeSVG={45}
                            classExtra="self-center"
                        />
                        <Badge
                            icon={faWhatsapp}
                            description="3148510662"
                            sizeSVG={45}
                            classExtra="self-center"   
                        />
                    </div>
                </section>
    );
}