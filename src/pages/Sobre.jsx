import Cabeca from "../Cabeca"
import Rodape from "../Rodape"

function Sobre(){
    return(
        <div className="site">
            <Cabeca/>
            <div className="conteudosobre">
                <div className="conts">
                    <div className="txts">
                        <h2>Sobre nós</h2>
                        <p className="ps">
                        Somos um grupo de apaixonados por tecnologia e educação, comprometidos em tornar o aprendizado de programação acessível a todos. Nossos instrutores são profissionais experientes da indústria, apaixonados por compartilhar conhecimento e ajudar os alunos a desenvolverem suas habilidades de programação.
                            
                            Nossa missão é capacitar você a dominar as linguagens de programação mais relevantes e as habilidades práticas necessárias para se destacar no mundo da tecnologia. Acreditamos que a educação a distância não deve comprometer a qualidade do ensino, e é por isso que investimos em recursos interativos, aulas práticas e suporte personalizado para garantir seu sucesso.</p>
                    </div>
                    <div className="imgs">
                        <img src="https://conteudo.imguol.com.br/blogs/295/files/2019/09/Foto-Divulgação_Jovens-Hakers-1024x819.jpg" alt="" />
                    </div>   
                </div>

                <div className="conts2">
                    <div className="imgs">
                        <img src="https://conteudo.imguol.com.br/c/noticias/02/2017/01/06/franquia-supergeeks-escola-de-programacao-para-criancas-e-adolescentes-1483725735309_v2_1920x1312.jpg" alt="" />
                    </div>   
                    <div className="txts2">
                        <h2>Mais curiosidades!</h2>
                        <p className="ps">Seja você um iniciante curioso ou um entusiasta experiente em busca de aprimoramento, estamos empolgados em recebê-lo em nossa comunidade virtual dedicada ao aprendizado de programação. Aqui na nossa plataforma, acreditamos que a educação em programação não tem limites geográficos. Nosso compromisso é proporcionar a você uma experiência educacional rica e interativa, onde quer que você esteja no mundo.</p>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default Sobre