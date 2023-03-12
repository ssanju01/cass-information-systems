CREATE OR ALTER PROC Shipper_Shipment_Details
@shipper_id int
as
Begin
	SELECT shipment_id, shipper_name, carrier_name, shipment_description, shipment_weight, shipment_rate_description
	FROM SHIPPER s 
	JOIN SHIPMENT st ON s.shipper_id = st.shipper_id
	JOIN CARRIER c ON st.carrier_id = c.carrier_id
	JOIN SHIPMENT_RATE sr ON st.shipment_rate_id= sr.shipment_rate_id
	WHERE s.shipper_id = @shipper_id
End