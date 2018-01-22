export default [
    {
        content: 'Quel est le nom du partage de la BDD',
        options: [
          {
            content: 'CS Data Trophy Gestion',
            good: false
          },
          {
            content: 'CsData',
            good: false
          },
          {
            content: 'CSDataTrophyGestion',
            good: true
          },
          {
            content: 'CSTrophyGestion',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Combien de logiciel d'imagerie peut-on paramètrer",
        options: [
          {
            content: '1',
            good: false
          },
          {
            content: '2',
            good: true
          },
          {
            content: '3',
            good: false
          },
          {
            content: '4',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Puis-je installer différents sites à l’aide du même DVD ?",
        options: [
          {
            content: 'Oui',
            good: false
          },
          {
            content: 'Non',
            good: true
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Lors de l’installation d’une mise à jour majeure (DVD), est-il nécessaire d’insérer le DVD sur les postes « client » afin de procéder à l’installation",
        options: [
          {
            content: 'Oui',
            good: false
          },
          {
            content: 'Non',
            good: true
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Lors de l’installation d’une mise à jour online, les postes client seront-ils mis à jour automatiquement lors du lancement de TG ?",
        options: [
          {
            content: 'Oui',
            good: true
          },
          {
            content: 'Non',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Sous quelle forme la localisation de la base de données doit elle être paramétrée ?",
        options: [
          {
            content: 'UNC',
            good: true
          },
          {
            content: 'Lecteur réseau',
            good: false
          },
          {
            content: 'UNC et Lecteur réseau',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Lors de l’ajout d’un profil praticien dans le logiciel est-il nécessaire de réaliser une commande ?",
        options: [
          {
            content: 'Oui',
            good: false
          },
          {
            content: 'Non',
            good: true
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Lorsque le cabinet a besoin d’une connexion utilisateur supplémentaire est-il nécessaire de réaliser une commande au préalable ? ",
        options: [
          {
            content: 'Oui',
            good: true
          },
          {
            content: 'Non',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "CS Trophy Gestion est il compatible avec d’autre logiciel d’imagerie que Carestream ?",
        options: [
          {
            content: 'Oui',
            good: true
          },
          {
            content: 'Non',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "CS Trophy Gestion offre t il la possibilité d’envoyer des SMS pour rappeler les rdv aux patients ?",
        options: [
          {
            content: 'Oui',
            good: true
          },
          {
            content: 'Non',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Combien il y a-t-il de manière de saisir un acte ?",
        options: [
          {
            content: '1',
            good: false
          },
          {
            content: '2',
            good: false
          },
          {
            content: '3',
            good: false
          },
          {
            content: '4',
            good: true
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "CS Trophy Gestion propose t il une assistance au codage CCAM ?",
        options: [
          {
            content: 'Oui',
            good: true
          },
          {
            content: 'Non',
            good: false
          }
        ],
        multi: false,
        answer: null
      },
      {
        content: "Est-il nécessaire de réaliser des paramétrages afin que la télétransmission soit fonctionnelle ?",
        options: [
          {
            content: 'Oui',
            good: true
          },
          {
            content: 'Non',
            good: false
          }
        ],
        multi: false,
        answer: null
      }
]