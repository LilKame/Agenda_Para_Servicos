using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using AgendaInteligente.Domain;
using AgendaInteligente.Domain.Entities;

namespace AgendaInteligente.Infrastructure.DataBase
{
    public class DbInitializer : DbContext
    {
        public DbInitializer(DbContextOptions <DbInitializer> options) : base(options){}

        // Tabelas;
        public DbSet<Company> Company { get; set; }

        // Configurar regras das tabelas;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }
    }
}
