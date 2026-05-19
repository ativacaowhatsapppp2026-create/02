import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { IMaskInput } from 'react-imask';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2, Download } from 'lucide-react';
import { cn } from '../lib/utils';

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(14, 'Telefone inválido'),
  cpf: z.string().min(14, 'CPF inválido'),
  rg: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
       name: '',
       email: '',
       phone: '',
       cpf: '',
       rg: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      // Simulating complex API call since Firebase setup was declined
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Dados do cadastro (Simulado):', data);
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      console.error(err);
      setError('Ocorreu um erro ao enviar seu cadastro. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="cadastro" className="w-full max-w-2xl mx-auto px-4 py-12">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl lg:p-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Faça seu Cadastro</h2>
              <p className="mt-2 text-gray-500">Insira seus dados para receber ofertas e promoções exclusivas.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Nome Completo</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Ex: João Silva"
                      className={cn(
                        "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100",
                        errors.name && "border-red-400 focus:border-red-400 focus:ring-red-50"
                      )}
                    />
                  )}
                />
                {errors.name && <p className="text-xs font-medium text-red-500">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">E-mail</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        placeholder="joao@exemplo.com"
                        className={cn(
                          "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100",
                          errors.email && "border-red-400 focus:border-red-400 focus:ring-red-50"
                        )}
                      />
                    )}
                  />
                  {errors.email && <p className="text-xs font-medium text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Telefone / WhatsApp</label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <IMaskInput
                        {...field}
                        mask="(00) 00000-0000"
                        placeholder="(00) 00000-0000"
                        className={cn(
                          "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100",
                          errors.phone && "border-red-400 focus:border-red-400 focus:ring-red-50"
                        )}
                        onAccept={(value) => field.onChange(value)}
                      />
                    )}
                  />
                  {errors.phone && <p className="text-xs font-medium text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">CPF</label>
                  <Controller
                    name="cpf"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <IMaskInput
                        {...field}
                        mask="000.000.000-00"
                        placeholder="000.000.000-00"
                        className={cn(
                          "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100",
                          errors.cpf && "border-red-400 focus:border-red-400 focus:ring-red-50"
                        )}
                        onAccept={(value) => field.onChange(value)}
                      />
                    )}
                  />
                  {errors.cpf && <p className="text-xs font-medium text-red-500">{errors.cpf.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">RG (Opcional)</label>
                  <Controller
                    name="rg"
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <IMaskInput
                        {...field}
                        mask="00.000.000-0"
                        placeholder="00.000.000-0"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                        onAccept={(value) => field.onChange(value)}
                      />
                    )}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#00458b] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-800 disabled:opacity-70 active:scale-95"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <span>Confirmar Cadastro</span>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-2xl"
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-[#00458b]">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 tracking-tight">Cadastro Quase Concluído!</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg font-medium text-gray-700">
                Falta apenas mais um passo para confirmar o seu cadastro.
              </p>
              <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
                Para confirmar corretamente o seu registro e começar a acompanhar as novidades e ofertas exclusivas, <strong>é obrigatório baixar e instalar o nosso aplicativo.</strong><br /><br />
                Clique no botão abaixo para fazer o download e concluir o seu cadastro!
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <a
                href="/CREDITA.apk"
                download
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#00458b] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg active:scale-95"
              >
                <Download className="h-5 w-5" />
                <span>Baixar Aplicativo</span>
              </a>
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full rounded-xl border border-gray-200 px-8 py-4 text-sm font-bold text-gray-600 transition-all hover:bg-gray-50 hover:shadow-md active:scale-95"
              >
                Realizar novo cadastro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
