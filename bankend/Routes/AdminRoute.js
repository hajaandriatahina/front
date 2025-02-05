import express from 'express'
import con from '../util/db.js'
import jwt from 'jsonwebtoken'
import {exec} from 'child_process'



const router = express.Router()


router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * FROM `admin` WHERE `email` = ? and `pasword` = ?"
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" })
        if (result.length > 0) {
            const email = result[0].email
            const token = jwt.sign(
                { role: "admin", email: email },
                "jwt_secret_key",
                { expiresIn: '1d' }
            );
            res.cookie('token', token)
            return res.json({ loginStatus: true })
        } else {
            return res.json({ loginStatus: false, Error: "Diso ny mot de passenao" })
        }
    })
})
router.post('/add', (req, res) => {
    const { nom, prenom, specialit, num, email, role } = req.body;
    

    // Validation des données
    if (!nom || !prenom || !specialit || !num || !email || !role) {
        return res.json({ Status: false, Error: "Tous les champs sont obligatoires." });
    }

    // Vérification des rôles valides
    const validRoles = ["medecin", "infirmier", "administrateur"];
    if (!validRoles.includes(role)) {
        return res.json({ Status: false, Error: "Rôle invalide." });
    }

    const sql = "INSERT INTO `personnel`( `nom`, `prenom`, `specialite`, `numero_telephone`, `email`, `role`)VALUES (?)";
    const values = [nom, prenom, specialit, num, email, role];

    con.query(sql, [values], (err, result) => {
        if (err) {
            console.error(err);
            return res.json({ Status: false, Error: "Erreur lors de l'insertion dans la base de données." });
        }
        return res.json({ Status: true, Message: "Personnel ajouté avec succès." });
    });
});


router.post('/addpatien', (req, res) => {
    const sql = "INSERT INTO `patients`( `nom`, `prenom`, `date_naissance`, `adresse`, `numero_telephone`, `email`, `historique_medical`) VALUES (?)"
    const values = [
     req.body.nom, 
     req.body.prenom,
     req.body.date,
     req.body.adresse,
     req.body.num,
     req.body.email,
     req.body.historique
       

    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
        return res.json({ Status: true })
    })
})
router.post('/addConsultation', (req, res) => {
    const sql = "INSERT INTO `consultation`( `patie`, `personnel`, `dossier-medical`, `description`) VALUES (?)"
    const values = [
        req.body.Pantie,
        req.body.personnel,
        req.body.dossier,
        req.body.descriptio
       

    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
        return res.json({ Status: true })
    })
})
router.post('/addDossier', (req, res) => {
    const sql = "INSERT INTO `dossiers_medicaux`( `patient_id`, `diagnostic`, `prescription`, `notes`) VALUES (?)"
    const values = [
        req.body.patient_id, 
        req.body.dignostic,
        req.body.prescriptio,
        req.body.note
     
       

    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
        return res.json({ Status: true })
    })
})

router.post('/novelleTra', (req, res) => {
    const sql = "INSERT INTO `traitements`( `dossier_id`, `medicament`, `dosage`, `frequence`, `date_debut`, `date_fin`)  VALUES (?)"
    const values = [
        req.body.dossier_id, 
        req.body.medicament,
        req.body.dosage,
        req.body.frequence,
        req.body.date_debut,
        req.body.date_fi
    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
        return res.json({ Status: true })
    })
})
router.post('/rendevousNous', (req, res) => {
    const sql = "INSERT INTO `rendezvous`( `patient_id`, `personnel_id`, `date_heure`, `motif`)  VALUES (?)"
    const values = [
        req.body.patient_id, 
        req.body.personnel_id,
        req.body.date_heure,
        req.body.motif 
    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
        return res.json({ Status: true })
    })
    console.log("connect")
})
router.get("/tasks", (req, res) => {
    exec("tasklist", (err, stdout, stderr) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération des tâches.");
            return;
          }
          const lines = stdout.split("\n");
          const tasks = lines
      
      
    })
    
})

router.get('/persontable', (req, res) => {
    const sql = "SELECT * FROM `personnel` WHERE 1";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/persontable', (req, res) => {
    const sql = "SELECT * FROM `personnel` WHERE 1";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/patietable', (req, res) => {
    const sql = "SELECT * FROM `patients` WHERE 1";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/Dossiertable', (req, res) => {
    const sql = "SELECT * FROM `dossiers_medicaux` WHERE 1";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/TraitementTamb', (req, res) => {
    const sql = "SELECT * FROM `traitements` WHERE 1";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/rendevouzTamb', (req, res) => {
    const sql = "SELECT * FROM `rendezvous` WHERE 1";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/editP/:Id', (req, res) => {
    const id = req.params.Id;
    const sql = "SELECT * FROM `personnel` WHERE Id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
    
})
router.get('/editRend/:Id', (req, res) => {
    const id = req.params.Id;
    const sql = "SELECT * FROM `rendezvous` WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});
router.get('/editPentie/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `patients` WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
    
})
router.get('/editTrait/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM traitements WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error: " + err });
        return res.json({ Status: true, Result: result });
    });
});

router.get('/editDouze/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `dossiers_medicaux` WHERE id = ?";
    
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erreur MySQL :", err);
            return res.status(500).json({ Status: false, Error: "Erreur de requête" });
        }
        if (result.length === 0) {
            return res.json({ Status: false, Error: "Dossier non trouvé" });
        }
        return res.json({ Status: true, Result: result });
    });
});

router.put("/editP_up/:Id", (req, res) => {
    const id = req.params.Id;
    const sql = `UPDATE personnel SET nom= ?, prenom= ?, specialite= ?, numero_telephone = ?, email = ?, role = ? WHERE Id = ?`;
    const values = [
        req.body.nom,
        req.body.prenom,
        req.body.specialit,
        req.body.num,
        req.body.email,
        req.body.role
    ]
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error"+err })
            return res.json({ Status: true, Result: result })
    })


})
router.put("/updaterendevous/:Id", (req, res) => {
    const id = req.params.Id;
    const sql = `UPDATE rendezvous SET patient_id= ?, personnel_id= ?, date_heure= ?, motif= ? WHERE id = ?`;
    const values = [
        req.body.patient_id,
        req.body.personnel_id,
        req.body.date_heure,
        req.body.motif
    ];
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error: " + err });
        return res.json({ Status: true, Result: result });
    });
});
router.put("/edit_pantie/:Id", (req, res) => {
    const id = req.params.Id;
    const sql = `UPDATE patients SET nom=? ,prenom=? ,date_naissance=? ,adresse=? ,numero_telephone=? ,email=? ,historique_medical=? WHERE id = ?`;
    const values = [
        req.body.nom, 
        req.body.prenom,
        req.body.date,
        req.body.adresse,
        req.body.num,
        req.body.email,
        req.body.historique
    ]
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error"+err })
            return res.json({ Status: true, Result: result })
    })
    



})
router.put("/updateTrait/:Id", (req, res) => {
    const id = req.params.Id;
    const sql = `UPDATE traitements SET dossier_id = ?, medicament = ?, dosage = ?, frequence = ?, date_debut = ?, date_fin = ? WHERE id = ?`;
    const values = [
        req.body.dossier_id,
        req.body.medicament,
        req.body.dosage,
        req.body.frequence,
        req.body.date_debut,
        req.body.date_fin
    ];
    
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error: " + err });
        return res.json({ Status: true, Result: result });
    });
});


    




router.put("/editDossier/:id", (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE dossiers_medicaux 
                 SET patient_id = ?, diagnostic = ?, prescription = ?, notes = ? 
                 WHERE id = ?`;
    
    const values = [
        req.body.patient_id, 
        req.body.diagnostic,
        req.body.prescription,
        req.body.notes
    ];
    
    con.query(sql, [...values, id], (err, result) => {
        if (err) {
            console.error("Erreur MySQL :", err);
            return res.status(500).json({ Status: false, Error: "Erreur de mise à jour" });
        }
        return res.json({ Status: true, Result: result });
    });
});

router.delete('/delet_personnel/:Id', (req, res) => {
    const id = req.params.Id;
    const sql = "DELETE FROM `personnel` WHERE Id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Eroor:"Query error"+err })
            return res.json({Status: true, Result: result})
    })
})
router.delete('/delet_pantie/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `patients` WHERE id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Eroor:"Query error"+err })
            return res.json({Status: true, Result: result})
    })
})
router.delete('/delet_traitement/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `traitements` WHERE id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Eroor:"Query error"+err })
            return res.json({Status: true, Result: result})
    })
})
router.delete('/delet_rendevous/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `rendezvous` WHERE id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Eroor:"Query error"+err })
            return res.json({Status: true, Result: result})
    })
})
router.delete('/delet_Dossier/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `dossiers_medicaux` WHERE id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Eroor:"Query error"+err })
            return res.json({Status: true, Result: result})
    })
})

router.post('/Add_employer', (req, res) => {
    const sql = "INSERT INTO `employer`( `nom`,  `statu`) VALUES (?)";
    const values = [
        req.body.nom,
        req.body.Statu
    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true })

    })
    
   

})
router.get('/Employer', (req, res) => {
    const sql = "SELECT * FROM `employer`";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
})
router.get('/Modifie/:Id', (req, res) => {
    const id = req.params.Id;
    const sql = "SELECT * FROM `employer`  WHERE Id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" })
            return res.json({ Status: true, Result: result })
    })
    
})
router.get('/adminCount', (req, res) => {
    try {
        const sql = "SELECT COUNT(Id) AS personnel FROM personnel";
        con.query(sql, (err, result) => {
            if (err) {
                console.error("Erreur SQL :", err);
                return res.json({ Status: false, Error: "Erreur de requête" });
            }
            return res.json({ Status: true, Result: result });
        });
    } catch (error) {
        console.error("Erreur serveur :", error);
        res.json({ Status: false, Error: "Erreur interne du serveur" });
    }
});
router.get('/traitCount', (req, res) => {
    try {
        const sql = "SELECT COUNT(id) AS traitements FROM traitements";
        con.query(sql, (err, result) => {
            if (err) {
                console.error("Erreur SQL :", err);
                return res.json({ Status: false, Error: "Erreur de requête" });
            }
            return res.json({ Status: true, Result: result });
        });
    } catch (error) {
        console.error("Erreur serveur :", error);
        res.json({ Status: false, Error: "Erreur interne du serveur" });
    }
});
router.get('/rendCount', (req, res) => {
    try {
        const sql = "SELECT COUNT(id) AS rendezvous FROM rendezvous";
        con.query(sql, (err, result) => {
            if (err) {
                console.error("Erreur SQL :", err);
                return res.json({ Status: false, Error: "Erreur de requête" });
            }
            return res.json({ Status: true, Result: result });
        });
    } catch (error) {
        console.error("Erreur serveur :", error);
        res.json({ Status: false, Error: "Erreur interne du serveur" });
    }
});



export { router as adminRouter }
