using DataAccess.DBContext;
using Entity.Models;
using Manager.Interfaces;
using Manager.Repositories;
using Microsoft.EntityFrameworkCore;
using Manager.Services;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

builder.Services.Configure<AppSettingsModel>(configuration.GetSection("AppSettings"));
builder.Services.AddDbContext<CassInformationSystemsDbContext>(option => option.UseSqlServer(configuration.GetConnectionString("DefaultConnect")));

// Add services to the container.
builder.Services.AddTransient<IQuoteRepository, QuoteRepository>();
builder.Services.AddTransient<IShipperRepository, ShipperRepository>();
builder.Services.AddTransient<IHttpService, HttpService>();
builder.Services.AddHttpClient();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseAuthorization();
app.MapControllers();
app.Run();