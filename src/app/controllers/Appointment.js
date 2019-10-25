// import * as Yup from 'yup';
// import Appointment from '../models/Appointments';

class AppointmentController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   date: Yup.date().required,
    //   canceled: Yup.date(),
    //   provider_id: Yup.number().required(),
    // });

    // const appointment = await Appointment.create({
    //   user_id: req.user_id,
    // });

    return res.json();
  }
}

export default new AppointmentController();
