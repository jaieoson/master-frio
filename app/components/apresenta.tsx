import React from 'react';
//import Image from 'next/image';

const Card = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-md overflow-hidden shadow-lg">
    
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Bem-vindo ao FUTURO do Atendimento no WhatsApp! 🚀</h2>
              <p className="text-gray-600">
                  
                  Transforme seu negócio com nosso Robô Inteligente para WhatsApp.
                  Oferecemos soluções inovadoras para automação de atendimento, proporcionando uma experiência
                  única aos seus clientes.

                  <br></br><br></br>

                  <b>Principais Recursos:</b>
                  
                  
                  <ul>
                    
<li><b>Atendimento Instantâneo:</b> Respostas rápidas e eficientes, 24/7.</li>
<li><b>Personalização Avançada:</b> Adapte o robô às necessidades exclusivas do seu negócio.</li>
<li><b>Inteligência Artificial:</b> Respostas contextuais e interações naturais.</li>
<li><b>Relatórios Analíticos:</b> Acompanhe o desempenho e compreenda seu público.</li>
                  </ul>
                  
                  <br></br>
Benefícios:
<br></br>
 Economize Tempo: Automatize tarefas repetitivas, liberando sua equipe para focar no que realmente importa.
 <br></br>       
                  Aumente a Satisfação do Cliente: Respostas rápidas e precisas, elevando a experiência do cliente.
                  <br></br>
                  Expanda seus Negócios: Alcance mais clientes de forma eficiente.
                  <br></br>
Experimente a Revolução do Atendimento no WhatsApp.
<br></br>
🤖 Conheça Nosso Robô Inteligente Hoje! 🤖

[Agende uma Demonstração Gratuita]

Transforme o seu Atendimento, Transforme o seu Negócio!
Ligue para nós ou preencha o formulário para começar. 📞✉️




        </p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            INICIAR AUTOMAÇÃO
          </button>
        </div>
      </div>
    </div>
  );
};

const Texto = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card />
    </div>
  );
};

export default Texto;
