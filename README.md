# prueba-tuGerente

   api realizada para la prueba de tu gerente.


tecnologías usadas: node.js, PostgreSQL, sequelize, express, docker.


Importante para correr la API ejecutar el comando  docker-compose up --build desde el directorio raíz.
la api esta configurada para escuchar en el puerto 5050



la API consta de 3 endpoints 

el primero es el de creación de la reserva (booking) 
endpoint: http://localhost:5050/booking
es una petición post que manda los datos de la reserva en un formato JSON, en el model están definidas 5 propiedades
roomdetail: hace referencia al detalle del cuarto 
numberofdays: es la cantidad de días de la reserva
billingdata:son los datos de facturación 
identificationdata: los datos de identificación
amount: el total a pagar
condition: el estado del pago de la reserva,

ejemplo en formato JSON de como sería esta petición.


       { "roomdetail":"suite presidencial",
         "numberofdays": 6,
        "billingdata": "javier mascherano,calle factura 98",
        "identificationdata": "javier mascherano",
        "amount": "2342",
        "condition": "pendiente"
        }
        
      Adicional a estas propiedades se crea un id por defecto a cada reserva para poder cambiar el estado(condición) por ejemplo de "pendiente" a "pagado".
      
      
      
     El segundo endpoint es una petición put http://localhost:5050/booking
     este endopint recibe el id de la reserva por params y la actualización por body, de esta manera podemos cambiar el estado de la reserva.
     Ejemplos 
     
      http://localhost:5050/booking/2
      
      json{

        "condition": "pagado"
      }
      
      
     El tercer endopint es una petición get para poder ver todas las reservas 
     endpoint: http://localhost:5050/bookings.  
   
      }
      
      

 

        
        
        
        
