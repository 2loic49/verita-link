import { CheckCircle, Shield, Eye } from "lucide-react";

const ConfidentialInvoice = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Watermark Background */}
      <div className="watermark-bg">
        <div className="watermark-text">AUTO CLASS EXPORT</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Premium Institutional Header */}
        <header className="institutional-header py-12 text-center fade-in relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <Shield className="h-8 w-8 text-current opacity-60" />
          </div>
          <h1 className="text-4xl font-bold tracking-wider mb-3 institutional-accent">
            AUTO CLASS EXPORT – FATURA CONFIDENCIAL
          </h1>
          <p className="text-lg opacity-90 tracking-wide mb-4">
            Consulta protegida - página gerada exclusivamente para o titular
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Eye className="h-4 w-4" />
            <span>Acesso restrito e monitorizado</span>
          </div>
        </header>

        {/* Main Container */}
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
          
          {/* Client Data Section */}
          <section className="premium-card rounded-xl p-8 fade-in-top">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-current opacity-60"></div>
              <h2 className="text-2xl font-bold institutional-accent">Dados do Cliente</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-20"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium opacity-80">Nome:</span> 
                  <span className="font-semibold">Marques dos Santos Vaz Domingos</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium opacity-80">Identificação:</span> 
                  <span className="font-semibold gold-accent">02537270</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium opacity-80">Nacionalidade:</span> 
                  <span className="font-semibold">Portuguesa</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium opacity-80">Email:</span> 
                  <span className="font-semibold">estefaescadelgado93@gmail.com</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium opacity-80">Telefone:</span> 
                  <span className="font-semibold">+351 962 023 193</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="verified-bg p-6 rounded-xl border-2 border-current/10 w-full max-w-sm backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/0b6df889-d336-43e9-aaff-972522366702.png" 
                    alt="Documento de identidade verificado" 
                    className="w-full h-auto rounded-lg border border-current/20 shadow-lg"
                  />
                  <div className="flex items-center justify-center gap-2 mt-4 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="font-medium text-green-400">Documento de identidade verificado</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Section */}
          <section className="premium-card rounded-xl p-8 fade-in-bottom">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-current opacity-60"></div>
              <h2 className="text-2xl font-bold institutional-accent">Veículo adquirido</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-20"></div>
            </div>
            <div className="data-table rounded-xl overflow-hidden border border-current/10">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4 font-semibold table-header">Marca / Modelo</td>
                    <td className="px-6 py-4 font-medium">TOYOTA C-HR GR SPORT HYBRID</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4 font-semibold table-header">Motor</td>
                    <td className="px-6 py-4 font-medium">2.0 HYBRID 184 CV – Automático</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4 font-semibold table-header">Quilometragem</td>
                    <td className="px-6 py-4 font-medium">5.000 km</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4 font-semibold table-header">Ano</td>
                    <td className="px-6 py-4 font-medium">2023</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold table-header">Valor do veículo</td>
                    <td className="px-6 py-4 font-bold text-xl gold-accent">5.000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Amount Paid Section */}
          <section className="success-section success-glow rounded-xl p-8 fade-in-top">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  Total já pago pelo cliente: <span className="text-green-400">13.000 € TTC</span>
                </p>
                <p className="text-sm opacity-80 mt-1">Pagamento confirmado e validado</p>
              </div>
            </div>
          </section>

          {/* Pending Amount Section */}
          <section className="error-section rounded-xl p-8 fade-in-bottom">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <h2 className="text-2xl font-bold text-red-400">Montante pendente</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-red-400/50 to-transparent"></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full premium-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="table-header">
                    <th className="px-6 py-4 text-left font-semibold">Descrição</th>
                    <th className="px-6 py-4 text-right font-semibold">Valor (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4">Multa contratual aplicada</td>
                    <td className="px-6 py-4 text-right font-semibold">4.000 €</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="px-6 py-4">Juros de mora (20,80 € × 40 dias)</td>
                    <td className="px-6 py-4 text-right font-semibold">832 €</td>
                  </tr>
                  <tr className="bg-red-900/20 border-red-400/30">
                    <td className="px-6 py-4 font-bold text-lg">Total a pagar</td>
                    <td className="px-6 py-4 text-right font-bold text-2xl text-red-400">4.832 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Banking Data Section */}
          <section className="premium-card rounded-xl p-8 slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-current opacity-60"></div>
              <h2 className="text-2xl font-bold institutional-accent">Dados bancários para pagamento</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-20"></div>
            </div>
            <div className="verified-bg rounded-xl p-6 border border-current/10 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium opacity-80">Titular:</span>
                  <p className="font-bold text-lg gold-accent">Antonio Paulo Gomes Costa</p>
                </div>
                <div>
                  <span className="font-medium opacity-80">Banco:</span>
                  <p className="font-bold">Santander</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-medium opacity-80">IBAN:</span>
                  <p className="font-mono font-bold text-lg tracking-wider">PT50 0018 0003 66164914020 47</p>
                </div>
                <div>
                  <span className="font-medium opacity-80">BIC/SWIFT:</span>
                  <p className="font-bold">TOTAPTPL</p>
                </div>
                <div>
                  <span className="font-medium opacity-80">Referência:</span>
                  <p className="font-bold">DOMINGOS-TCH-2537270</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-current/5 rounded-lg border border-current/10">
                <p className="font-medium">
                  <span className="opacity-80">Motivo do pagamento:</span><br/>
                  Regularização pendente – DOMINGOS / TOYOTA C-HR
                </p>
              </div>
            </div>
          </section>

          {/* Process Status Section */}
          <section className="premium-card rounded-xl p-8 fade-in-bottom">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-current opacity-60"></div>
              <h2 className="text-2xl font-bold institutional-accent">Estado do processo</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-20"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-full h-4 overflow-hidden backdrop-blur-sm">
                <div className="h-full progress-bar rounded-full"></div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-xl font-bold">
                  Estado do processo: <span className="institutional-accent">75% concluído</span>
                </p>
                <p className="text-lg opacity-80">
                  Aguardando regularização fiscal
                </p>
                <div className="flex items-center justify-center gap-2 text-sm opacity-60">
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                  <span>Processamento em curso</span>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Premium Footer */}
        <footer className="text-center py-12 space-y-6 fade-in border-t border-current/10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <span className="font-bold text-lg text-green-400">Documento validado digitalmente</span>
          </div>
          <div className="max-w-3xl mx-auto px-6 space-y-3">
            <p className="text-sm opacity-80 leading-relaxed">
              Documento gerado digitalmente com certificação de segurança avançada.<br/>
              Nenhuma assinatura manuscrita é necessária para validação.
            </p>
            <p className="text-xs opacity-60">
              Página protegida e vinculada exclusivamente ao cliente titular • Acesso monitorizado e registado
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs opacity-40">
            <span>Sistema certificado ISO 27001</span>
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <span>Encriptação AES-256</span>
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <span>Backup automático</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ConfidentialInvoice;