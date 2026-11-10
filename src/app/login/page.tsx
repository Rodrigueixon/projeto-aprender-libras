"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulação de login; redireciona para a trilha
    setTimeout(() => {
      setIsLoading(false);
      router.push("/learn");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao início</span>
        </Link>

        <div className="flex items-center gap-3 justify-center mb-2">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl shadow-3d-primary">
            🤟
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Sinaliza
          </h2>
        </div>
        <p className="text-center text-sm font-bold text-slate-600">
          Entre na sua conta para continuar seus estudos em Libras
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-md sm:rounded-3xl border-2 border-slate-200 sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-extrabold text-slate-800"
              >
                E-mail
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="block w-full appearance-none rounded-2xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 font-medium text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-extrabold text-slate-800"
              >
                Senha
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full appearance-none rounded-2xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 font-medium text-sm transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
                />
                <span className="font-semibold text-slate-600">Lembrar-me</span>
              </label>
              <a
                href="#"
                className="font-bold text-indigo-600 hover:text-indigo-700"
              >
                Esqueceu a senha?
              </a>
            </div>

            <div>
              <Button
                type="submit"
                variant="3d-primary"
                size="lg"
                disabled={isLoading}
                className="w-full text-base"
              >
                {isLoading ? "Entrando..." : "Entrar na Plataforma"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm font-semibold text-slate-600">
            Ainda não tem uma conta?{" "}
            <Link
              href="/register"
              className="font-extrabold text-indigo-600 hover:underline"
            >
              Criar conta grátis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
