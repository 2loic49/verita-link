import { CheckCircle } from "lucide-react";
import idDomingos from "@/assets/id-domingos.jpg";

const ConfidentialInvoice = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Watermark Background */}
      <div className="watermark-bg">
        <div className="watermark-text">AUTO CLASS EXPORT</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Institutional Header */}
        <header className="institutional-header py-8 text-center fade-in">
          <h1 className="text-3xl font-bold tracking-wider mb-2">
            AUTO CLASS EXPORT – FATURA CONFIDENCIAL
          </h1>
          <p className="text-lg opacity-90 tracking-wide">
            Consulta protegida - página gerada exclusivamente para o titular
          </p>
        </header>

        {/* Main Container */}
        <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
          
          {/* Client Data Section */}
          <section className="bg-card rounded-lg shadow-sm border p-6 fade-in-top">
            <h2 className="text-xl font-semibold mb-6 text-primary">Dados do Cliente</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Nome:</span> Marques dos Santos Vaz Domingos
                </div>
                <div>
                  <span className="font-medium">Identificação:</span> 02537270
                </div>
                <div>
                  <span className="font-medium">Nacionalidade:</span> Portuguesa
                </div>
                <div>
                  <span className="font-medium">Email:</span> estefaescadelgado93@gmail.com
                </div>
                <div>
                  <span className="font-medium">Telefone:</span> +351 962 023 193
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="verified-bg p-4 rounded-lg border w-full max-w-sm">
                  <img 
                    src={idDomingos} 
                    alt="Documento de identidade" 
                    className="w-full h-auto rounded border"
                  />
                  <p className="text-sm text-center mt-2 text-muted-foreground">
                    Documento de identidade verificado
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Section */}
          <section className="bg-card rounded-lg shadow-sm border p-6 fade-in-bottom">
            <h2 className="text-xl font-semibold mb-6 text-primary">Veículo adquirido</h2>
            <div className="data-table rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium bg-muted">Marca / Modelo</td>
                    <td className="px-4 py-3">TOYOTA C-HR GR SPORT HYBRID</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium bg-muted">Motor</td>
                    <td className="px-4 py-3">2.0 HYBRID 184 CV – Automático</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium bg-muted">Quilometragem</td>
                    <td className="px-4 py-3">5.000 km</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium bg-muted">Ano</td>
                    <td className="px-4 py-3">2023</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium bg-muted">Valor do veículo</td>
                    <td className="px-4 py-3 font-semibold">5.000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Amount Paid Section */}
          <section className="success-section rounded-lg p-6 fade-in-top">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <p className="text-lg font-semibold text-green-700">
                Total já pago pelo cliente: 13.000 € TTC
              </p>
            </div>
          </section>

          {/* Pending Amount Section */}
          <section className="error-section rounded-lg p-6 fade-in-bottom">
            <h2 className="text-xl font-semibold mb-4 text-red-700">Montante pendente</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded border">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-medium">Descrição</th>
                    <th className="px-4 py-3 text-right font-medium">Valor (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Multa contratual aplicada</td>
                    <td className="px-4 py-3 text-right font-medium">4.000 €</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Juros de mora (20,80 € × 40 dias)</td>
                    <td className="px-4 py-3 text-right font-medium">832 €</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 font-semibold">Total a pagar</td>
                    <td className="px-4 py-3 text-right font-bold text-red-700 text-lg">4.832 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Banking Data Section */}
          <section className="bg-card rounded-lg shadow-sm border p-6 slide-in-left">
            <h2 className="text-xl font-semibold mb-6 text-primary">Dados bancários para pagamento</h2>
            <div className="verified-bg rounded-lg p-4 space-y-2">
              <div><span className="font-medium">Titular:</span> Antonio Paulo Gomes Costa</div>
              <div><span className="font-medium">IBAN:</span> PT50 0018 0003 66164914020 47</div>
              <div><span className="font-medium">BIC/SWIFT:</span> TOTAPTPL</div>
              <div><span className="font-medium">Banco:</span> Santander</div>
              <div><span className="font-medium">Motivo:</span> Regularização pendente – DOMINGOS / TOYOTA C-HR</div>
            </div>
          </section>

          {/* Process Status Section */}
          <section className="bg-card rounded-lg shadow-sm border p-6 fade-in-bottom">
            <h2 className="text-xl font-semibold mb-4 text-primary">Estado do processo</h2>
            <div className="space-y-4">
              <div className="bg-muted rounded-full h-3 overflow-hidden">
                <div className="bg-primary h-full progress-bar rounded-full"></div>
              </div>
              <p className="text-center font-medium">
                Estado do processo: 75% concluído – Aguardando regularização fiscal
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="text-center py-8 space-y-4 fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-700">Documento validado digitalmente</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            Documento gerado digitalmente. Nenhuma assinatura manuscrita é necessária. 
            Página protegida e vinculada exclusivamente ao cliente titular.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ConfidentialInvoice;