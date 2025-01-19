import Logo from "@/assets/Logo.png"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">

                {/* Logo and Copyright */}
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Aegroto dum anima est spes est. I'glor ph'qath yl'vhar nth'yorr, sha'kthar il'zaar ky'gnai y'lyra.
                        Vhor'nath l'qoth klyu'nai shaggor, y'hothra ph'llor ghan'zhuul.
                        C'thyllar sha'vrah, il'zaoth g'naihlor wgah'nagl, na'zzor ph'nglui r'thyll gha'tha.
                        Sy'hraa yl'ghuth na'kha thlor'gath! L'yorrath il'yvhor n'gha zhai n'ythorr.
                    </p>
                    <p>
                        © EvoGym All Rights Reserved
                    </p>
                </div>

                {/* Links */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Tharan'zyll ka'vhoor ul'ythar</p>
                    <p className="my-5">C'thyllar sha'vrah</p>
                    <p className="my-5">L'yorrath il'yvhor n'gha zhai n'ythorr</p>
                    <p>Sy'hraa yl'ghuth</p>
                </div>

                {/* Contact */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">I'glor ph'qath yl'vhar nth'yorr</p>
                    <p className="my-5">Il'zaoth g'naihlor wgah'nagl</p>
                    <p>+358 69 420 6942</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;